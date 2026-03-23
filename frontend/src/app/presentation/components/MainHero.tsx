'use client';

export default function MainHero() {
    return (
        <section className={"w-full h-dvh flex flex-col justify-center items-center relative overflow-hidden"}>
            {/* Spline Background Iframe */}
            <iframe
                src='https://my.spline.design/agencyhero-xv9O7XL7bl23jPVERpxy3aCB/'
                frameBorder='0'
                width='100%'
                height='100%'
                style={{
                    position: 'absolute',
                    inset: 0,
                    border: 'none'
                }}
            />
        </section>
    );
}
