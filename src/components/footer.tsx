
export default function Footer() {

    const date = new Date();
    var today = date.getFullYear()

    return (
        <footer id='footer' className="flex flex-col place-items-center p-6 font-light">
            <p>© Copyright {today}</p>
            <p>Designed & Built by <b className="font-semibold">Michael Cecchini</b></p>
        </footer>
    );
}
