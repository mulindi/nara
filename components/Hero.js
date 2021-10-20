const Hero = () => {
    return (
        <span
            data-content="Nara."
            className="relative block before:content-[attr(data-content)] dark:before:content-[attr(data-content)] before:w-full before:block before:absolute before:top-0 before:bottom-0 before:left-0 before:px-2 before:text-center before:text-black dark:before:text-black"
        >
            <span className="px-2 text-transparent bg-clip-text bg-gradient-to-br from-gradient-2-start to-gradient-2-end animate-gradient-foreground-3">
                Nara.
            </span>
        </span>
    )
}

export default Hero
