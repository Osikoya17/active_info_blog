const Category = (props) => {
    return (
        <div className="d-flex flex-column p4">
            <div className="w-100 shadow-sm p-1 mb-2"> <strong className="fs-5">Category:</strong></div>

            <div className="d-flex  flex-column gap-2 p-2">
                {props.items.map((data, index) =>
                    <span className="bg-light shadow  btn-sm category" key={index}>{data}</span>
                )}
            </div>
        </div>
    );
}

export default Category;