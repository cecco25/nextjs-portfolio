
export default function Footer() {

    const date = new Date();
    const today = date.getFullYear()

    return (
        <footer id='footer' className="flex flex-col place-items-center gap-3 p-6 font-light">
            <p>© Copyright {today}</p>
            <p className="text-center">Designed & Built by <b className="font-semibold">Michael Cecchini</b></p>
        </footer>
    );
}
