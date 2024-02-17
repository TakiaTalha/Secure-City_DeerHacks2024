import Link from "next/link"

const Navbar = () =>     {
    return (
        <div>
            <div>logo</div>
            <div>
                <Link href="/">Home</Link>
                <Link href="/explore">Explore</Link>
                <Link href="/login">Login</Link>
                <Link href="/report">Report</Link>
            </div>
        </div>
    )
}
export default Navbar