import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const ImageLoader = ({ src, alt }) => {
    const [loading, setLoading] = useState(true);

    return (
        <div className="relative w-full">
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <CircularProgress size={90} />
                </div>
            )}
            <img
                src={src}
                alt={alt}
                onLoad={() => setLoading(false)}
                onError={() => setLoading(false)}
                className={`object-fill w-[100px] max-md:w-[80px] cursor-pointer bg-white p-3 rounded-lg ${loading ? 'hidden' : 'block'}`}
            />
        </div>
    );
};

export default React.memo(ImageLoader);