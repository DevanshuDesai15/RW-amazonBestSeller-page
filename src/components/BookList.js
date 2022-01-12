import react from "react"
import BestSeller from "./BestSeller"

// BOOK LIST
const books=[
    {
        id:1,
        img: "https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL604_SR604,400_.jpg",
        title: 'The Psychology of Money',
        author: 'Morgan Housel'
    },
    {
        id:2,
        img: "https://images-eu.ssl-images-amazon.com/images/I/41+grDTP2FL._AC_UL604_SR604,400_.jpg",
        title: 'DO EPIC SHIT',
        author: 'Ankur Warikoo'
    },
    {
        id:3,
        img: "https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL604_SR604,400_.jpg",
        title: 'Atomic Habits',
        author: 'James Clear'
    },
    {
        id:4,
        img: "https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL604_SR604,400_.jpg",
        title: 'IKIGAI',
        author: 'Hector Garcia'
    },
    {
        id:5,
        img: "https://images-eu.ssl-images-amazon.com/images/I/818e+fq7+BL._AC_UL604_SR604,400_.jpg",
        title: 'Word Power',
        author: 'Norman Lewis'
    },
    {
        id:6,
        img: "https://images-eu.ssl-images-amazon.com/images/I/81bsw6fnUiL._AC_UL604_SR604,400_.jpg",
        title: 'Rich Dad Poor Dad',
        author: 'Robert T. Kiyosaki'
    },
    {
        id:7,
        img: "https://images-eu.ssl-images-amazon.com/images/I/81N7FmJhbhL._AC_UL604_SR604,400_.jpg",
        title: `Life's Amazing Secrets`,
        author: 'Guru Gopal Das'
    },
    {
        id:8,
        img: "https://images-eu.ssl-images-amazon.com/images/I/81jv44QdNwL._AC_UL604_SR604,400_.jpg",
        title: `Grandma's Bag of Stories`,
        author: 'Sudha Mutry'
    },
    {
        id:9,
        img: "https://images-eu.ssl-images-amazon.com/images/I/814jC+rODgL._AC_UL604_SR604,400_.jpg",
        title: `The Subtel Art of Not Giving a F*ck`,
        author: 'Mark Manson'
    },
    {
        id:10,
        img: "https://images-eu.ssl-images-amazon.com/images/I/81tSFxicufL._AC_UL604_SR604,400_.jpg",
        title: `400 Days`,
        author: 'Chetan Bhagat'
    }


]

function BookList() {
    return (
        <section className='booklist'>
            {
                books.map((book)=>{
                    return <BestSeller key={book.id} {...book}/>
                })
            }
        </section>
    )
}

export default BookList