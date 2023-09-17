const Heading = ({children}) => {
    return (
        <div className="border-l-4 border-cyan-800 ps-2 font-bold text-xl xl:text-2xl">
            <h2>{children}</h2>
        </div>
    );
};

export default Heading;