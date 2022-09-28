import { useState } from "react";
const Category = () => {
    const [category, setCategory] = useState(["♟ Politics", "🎲 Games", "💱 Crypto", " 💻 Tech",
        "⛪ Religion", "💰  Finances", "📚 Education", "🏀 Sport", "📱 Blogging", "🤡 Fictions", "⚙ Engineering"])
    return (
        <div className="d-flex flex-column p4">
            <div className="w-100 shadow-sm p-1 px-2 bg-dark mb-2 rounded-1"> <strong className="fs-5 text-white">Category</strong></div>

            <div className="d-flex  flex-column gap-2 p-2 ">
                {category.map((data, index) =>
                    <span className="bg-light px-1 py-1 btn-sm category  rounded-2" key={index}>{data}</span>
                )}
            </div>
        </div>
    );
}

export default Category;


