import React from "react";

const Loader = () => {
    return (
        <div className="flex items-center justify-center h-full">
            <div className="loader">
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default Loader;