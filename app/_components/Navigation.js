import Link from "next/link"

function Navigation() {
    return (
        <div >
            <li>
                <Link href={'/'}>Home</Link>
            </li>
            <li>
                <Link href={'/about'} >About</Link>
            </li>
            <li>
                <Link href={'/account'}>Account</Link>
            </li>
            <li>
                <Link href={'/cabins'}>Cabins</Link>
            </li>

        </div>
    )
}

export default Navigation
