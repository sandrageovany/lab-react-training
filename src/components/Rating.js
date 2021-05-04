

const Rating=({children})=>{
    let nbOfStars = Math.round(children)
    if (nbOfStars === 0) return <div >☆☆☆☆☆</div>
    if (nbOfStars === 1) return <div>★☆☆☆☆</div>
    if (nbOfStars === 2) return <div>★★☆☆☆</div>
    if (nbOfStars === 3) return <div>★★★☆☆</div>
    if (nbOfStars === 4) return <div>★★★★☆</div>
    return <div>★★★★★</div>

}

export default Rating;