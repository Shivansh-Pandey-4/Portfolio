export default function BottomBlur() {

    return (
        <div
            className="fixed bottom-0 left-0 right-0 z-50 h-15 pointer-events-none backdrop-blur-md [mask-image:linear-gradient(to_bottom,transparent,black)]"
        />
    )
}