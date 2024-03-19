
export default function Sidebar() {
    return(
        <div className="relative h-12 w-screen
                        flex flex-row 
                        gap-12
                        justify-center
                        align-text-middle
                        items-center
                        bg-[#B7A38B] text-white
                        font-sans
                        shadow-lg
                        text-2xl
                        
                        ">
            
            <i>Home</i>
            <i className="pb-[50px] text-7xl">.</i>
            <i>Menu</i>
            <i className="pb-[50px] text-7xl">.</i>
            <i>Place Order</i>
            <i className="pb-[50px] text-7xl">.</i>
            <i>Contact Me</i>
            
        </div>
    );
};