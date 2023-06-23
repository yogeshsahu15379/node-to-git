const PaginationSection = (props) =>{

    const pagenumbers = (n) =>{
        let arr=[];
        for(let i=1;i<=n;i++){
            arr.push(<button className="pagenumber">{i}</button>);
        }
        return arr;
    }

    return (

        <div className="pagination">
            <button className="pagenumber"> {'<<'} </button>

            
                {/* {pagenumbers(props.pages)} */}
            

            <button className="pagenumber">{'>>'}</button>
        </div>

    );
}
export default PaginationSection;