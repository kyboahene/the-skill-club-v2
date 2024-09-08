export function reactLottieConfig(json: any) {
    return {
        loop: true,
        autoplay: true,
        animationData: json,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
}