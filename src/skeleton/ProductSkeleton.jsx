import React from 'react';

const ProductSkeleton = () => {
    return (
        <section >
          <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}>
              {
                  Array.from({length:6}).map((i)=>{
                      return (
                          <div key={i}>
                              <div  className="flex flex-col gap-4 w-full">
                                  <div className="skeleton h-32 w-full"></div>
                                  <div className="skeleton h-4 w-28"></div>
                                  <div className="skeleton h-4 w-full"></div>
                                  <div className="skeleton h-4 w-full"></div>
                              </div>
                          </div>
                      )
                  })
              }
          </div>
        </section>
    );
};

export default ProductSkeleton;