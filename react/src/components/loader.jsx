import React, { useEffect } from "react";

const Loader = ({ isLoading }) => {
    const [loading, setLoading] = React.useState(isLoading);

    useEffect(() => {
        setLoading(isLoading);
    }, [isLoading]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-full">
                <div className="loader">
                    <div className="spinner-border text-primary" role="status">
                        <img className="pokeball" src="/assets/pokeball.png" alt="" />
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        );
    }
};

export default Loader;