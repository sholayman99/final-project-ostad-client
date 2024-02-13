import React from 'react';

const FeaturedSkeleton = () => {
    return (
        <section className={"lg:px-10 lg:pt-20 md:p-10 p-6 flex flex-col items-center justify-center gap-10"}>
            <div className={"text-center"}>
                <h1 className={"lg:text-3xl md:text-2xl text-xl font-bold uppercase"}>Featured Products</h1>
                <p className={"mt-2 lg:text-md md:text-sm text-xs text-gray-600"}>
                    Products Featuring With Top Brands and Categories Only For You
                </p>
            </div>
            <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-10"}>
                {
                    Array.from({length: 6}).map((i) => {
                        return (
                            <div key={i} className="flex flex-col gap-4">
                            <div className="skeleton h-32 w-full"></div>
                                <div className="skeleton h-4 w-28"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default FeaturedSkeleton;