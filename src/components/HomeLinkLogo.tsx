import logo from '../assets/logo.svg';
import logoDark from '../assets/logo-dark.svg';

export default function HomeLinkLogo() {
    const selectedLogo = window.matchMedia('(prefers-color-scheme: dark)').matches ? logoDark : logo;

    return (
        <a href="/" className="block mb-6">
            <img src={selectedLogo} className="max-h-[40px]" alt="Bird's Eye Logo" />
        </a>
    )
}