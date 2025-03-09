'use client'

// ----------------------------------------------------

const TruncateText = ({ text, length = 100 }) => {
    if (!text) return null;

    return (
        <p>
            {text.length > length ? `${text.slice(0, length)}...` : text}
        </p>
    );
};

export default TruncateText;
