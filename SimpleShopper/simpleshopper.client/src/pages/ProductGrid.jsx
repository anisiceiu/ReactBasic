import { useAuth } from "../AuthProvider";
import Sidebar from './Sidebar';
import SecureHeader from './SecureHeader';
import * as React from 'react';
import axios from "axios";
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 
import { useEffect, useState } from "react";
import { AgGridReact } from 'ag-grid-react';
ModuleRegistry.registerModules([AllCommunityModule]);

function ProductGrid() {
    const [rows, setRows] = useState([]);
    const auth = useAuth();

    useEffect(() => {
        axios.get("https://localhost:7086/api/Product/GetProducts").then((response) => {
            let products = response.data;
            if (response.data.length) {
                setRows(products);
            }
        });

    }, []);

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState([
        { field: "productId", width: 100 },
        { field: "productName", width: 180, },
        { field: "imageName", width: 150, },
        { field: "quantity", width: 150, },
        { field: "price", width: 150, },
        { field: "isFeatured", width: 120 }
    ]);


    return (
        <>
            <div className="row sidebar-b">
                <div className="col-md-2 col-sm-3 sidebar-bg sidebar-b">
                    <nav className="d-none d-md-block bg-light sidebar sidebar-bg">
                        <div className="sidebar-sticky">
                            <Sidebar />
                        </div>
                    </nav>

                </div>
                <div className="col-md-10 col-sm-3">
                    <SecureHeader />
                    
                    <AgGridReact
                        rowData={rows}
                        columnDefs={colDefs}
                        pagination={ true}
                    />
                   
                </div>
            </div>
      <div>
          
      </div>
      </>
     );
}

export default ProductGrid;