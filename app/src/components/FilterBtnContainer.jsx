import FilterBtn from "./FilterBtn";

export default function FilterBtnContainer({onChange}){
    return (
        <div className="flex justify-around text-center mt-1">
                <FilterBtn val="track" onChange={onChange}/>
                <h3 className="text-center text-black">Search By</h3>
                <FilterBtn val="artist" onChange={onChange}/>
            </div>
    );
}