function Bar() {
    return <div className="bar w-24 h-1 bg-mustard ml-12 mt-12"></div>

}

function Bar_end() {
    return (
        <div className="bar_end flex justify-end h-1 w-screen ">
            <div className="bar flex  w-24 h-1 bg-mustard mr-12 md:mr-32 mt-12 md:mt-0"></div>
        </div>
    )
}
export { Bar, Bar_end }