import React, {useEffect} from 'react'
import '../../styles/MainContainer.css'
import { FaUsers } from 'react-icons/fa'
import { AudioList } from './AudioList'
import { Banner } from './Banner'
function MainContainer() {

    useEffect(() => {
        const allLi = document.querySelector(".menuList").querySelectorAll("li")

        function changePopularActive() {
            allLi.forEach((n) => n.classList.remove("active"))
            this.classList.add("active")
        }

        allLi.forEach((n) => n.addEventListener("click", changePopularActive))
    }, [])

    return (
        <div className='mainContainer'>
            <Banner/>

            <div className="menuList">
                <ul>
                    <li>
                        <a href="#">Popular</a>
                    </li>
                    <li>
                        <a href="#">Albums</a>
                    </li>
                    <li>
                        <a href="#">Songs</a>
                    </li>
                    <li>
                        <a href="#">Fans</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                </ul>
            </div>


            <p className="followers">
                <i>
                    <FaUsers/>
                </i>
                15H <span>Followers</span>
            </p>

            <AudioList/>
        </div>
    )
}
export { MainContainer }