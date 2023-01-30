import UserIcon from "../icons/userIcon"
import BookmarkIcon from "../icons/bookmarkIcon"
import FavouriteIcon from "../icons/favouriteIcon"
import ShoppingBagIcon from "../icons/shoppingBagIcon"

export default function navbar() {
    return (
        <div className="grid grid-cols-12 border-b border-slate-200 h-12 px-7">

            <div className="col-span-2 flex items-center">
                <img className="h-8 w-8 mx-1" src="https://pngimg.com/d/kfc_PNG44.png" alt="" />
                <h1 className="text-lg font-bold text-green-700">Oyotee</h1>
            </div>
            <div className="col-span-7 flex items-center  font-bold	text-sm ">
                <ul className="flex gap-10 h-full items-center">
                    <li className="h-full flex items-center border-b-2 border-green-600">Shop</li>
                    <li className="h-full flex items-center text-slate-400/60">Plant Care</li>
                    <li className="h-full flex items-center text-slate-400/60">workshops</li>
                    <li className="h-full flex items-center text-slate-400/60 ">Blogs</li>
                </ul>
            </div>
            <div className="col-span-3 flex items-center justify-end gap-7">
                <div className="relative">
                    <ShoppingBagIcon classes="h-6 w-6" />
                    <span className="absolute text-xs bg-red-600 rounded-full w-3 h-3 text-center text-white top-4 flex justify-center items-center left-3">3</span>
                </div>
                <FavouriteIcon classes="h-5 w-5" />
                <UserIcon classes="h-7 w-7" />
            </div>
            
        </div>
    )
}