import FilterBtnContainer from "./FilterBtnContainer";


export default function SearchContainer({inp, setInp, onClick, onChangeFilter, placeholder, btnText, tip}){

    function handleKeyUp(event){
        if (event.key === "Enter"){
            onClick();
        }
    }

    return (
        <div className="bg-wheat py-5 w-11/12 mx-auto my-2 rounded px-1">
            <div className="flex w-full mx-auto py-1 justify-center  ">
                <input className="bg-white pl-10 text-center text-black w-3/4 rounded border" type="text" value={inp} onChange={e=>setInp(e.target.value)} onKeyUp={handleKeyUp} placeholder={placeholder} />
                <button className="bg-white text-black rounded ml-5 p-1 bg-opacity-80 border hover:bg-blue hover:text-white" onClick={onClick} title={tip}>{btnText}</button>
            </div>
            {onChangeFilter? <FilterBtnContainer onChange={onChangeFilter}/> : ""}
        </div>
    )

}