import React from 'react';

const ProductSkeleton = () => {
    return (
        <section className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full"} >

              {
                  Array.from({length:6}).map((i)=>{
                      return (
                          <div key={i} className={"p-5"}>
                              <div className="flex flex-col justify-center items-center gap-4 w-full">
                                  <div className="skeleton h-48 w-96"></div>
                                  <div className="skeleton h-4 w-28"></div>
                                  <div className="skeleton h-4 w-full"></div>
                                  <div className="skeleton h-4 w-full"></div>
                                  <div className="skeleton h-4 w-full"></div>
                              </div>
                          </div>
                      )
                  })
              }

        </section>
    );
};

export default ProductSkeleton;