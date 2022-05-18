import React from 'react';
import CepasInDb from './CepasInDb';
import ContentRowResumen from './ContentRowResumen';
import ProductoInDb from "./ProductoInDb";

function ContentRowTop(){
    return (
      <React.Fragment>
        {/*<!-- Content Row Top -->*/}
        <div className="container-fluid">
          <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard Bodega Grupo 5</h1>
          </div>

          {/*<!-- Content Row Movies-->*/}
          <ContentRowResumen />
          {/*<!-- End movies in Data Base -->*/}

          {/*<!-- Content Row Last Movie in Data Base -->*/}
          <div className="row">
            {/*<!-- Last Movie in DB -->*/}
            <ProductoInDb />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <CepasInDb />

            {/*<!--End Genres In Db-->*/}
          </div>
        </div>
        {/*<!--End Content Row Top -->*/}
      </React.Fragment>
    );
}

export default ContentRowTop;