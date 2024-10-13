'use client'
// a random comment has appeared
import { useState, useEffect } from 'react'
import { Button } from "@headlessui/react"
import { Loader2, Zap } from "lucide-react"
import Replicate from "replicate";
const blackSheepImages = [
    '/images/blacksheep/sheeps/BLACK_SHEEP_1.png',
    '/images/blacksheep/sheeps/BLACK_SHEEP_2.png',
    '/images/blacksheep/sheeps/BLACK_SHEEP_3.png',
    '/images/blacksheep/sheeps/BLACK_SHEEP_4.png',
    '/images/blacksheep/sheeps/BLACK_SHEEP_5.png',
    '/images/blacksheep/sheeps/BLACK_SHEEP_6.png',
    '/images/blacksheep/sheeps/BLACK_SHEEP_7".png',
    '/images/blacksheep/sheeps/BLACK_SHEEP_8.png',
    '/images/blacksheep/sheeps/BLACK_SHEEP_9.png',
    '/images/blacksheep/sheeps/BLACK_SHEEP_10.png',
    '/images/blacksheep/sheeps/BLACK_SHEEP_11.png',
    '/images/blacksheep/sheeps/BLACK_SHEEP_12.png',
    '/images/blacksheep/sheeps/BLACK_SHEEP_13.png',
    '/images/blacksheep/sheeps/BLACK_SHEEP_14.png',
]

const selectRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * blackSheepImages.length)
    setSelectedImage(blackSheepImages[randomIndex])
}
export default function Generate() {
    const [inputValue, setInputValue] = useState('')
    const [isGenerating, setIsGenerating] = useState(false)
    const [isGenerated, setIsGenerated] = useState(false)
    const [isMinting, setIsMinting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const replicate = new Replicate();
    const [prompt, setPrompt] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [sheepPosition, setSheepPosition] = useState(0)
    const [selectedImage, setSelectedImage] = useState('')

    useEffect(() => {
        let interval;
        if (isGenerating || isMinting) {
            interval = setInterval(() => {
                setSheepPosition((prev) => (prev + 1) % 3)
            }, 500)
        }
        return () => clearInterval(interval)
    }, [isGenerating, isMinting])

    const handleGenerate = () => {
        setIsGenerating(true)
        // Select a random image when generating
        const randomIndex = Math.floor(Math.random() * blackSheepImages.length)
        setSelectedImage(blackSheepImages[randomIndex])
        setTimeout(() => {
            setIsGenerating(false)
            setIsGenerated(true)
        }, 5000)
    }

    const handleMint = () => {
        setIsMinting(true)
        setTimeout(() => {
            setIsMinting(false)
            setIsSuccess(true)
        }, 3000)
    }

    const generateImage = async () => {
        if (!prompt) {
            setError('Please enter a prompt')
            return
        }

        setIsLoading(true)
        setError('')

        try {
            // This is a placeholder. In a real application, you would call your AI image generation API here.
            const data = await replicate.run("black-forest-labs/flux-schnell", { input: { prompt } })
            console.log(data)

            if (data) {
                setImageUrl(data)
            } else {
                throw new Error(`Failed to generate image: ${err.message}`)
            }
        } catch (err) {
            setError(`Failed to generate image: ${err.message}`)
        } finally {
            setIsLoading(false)
        }
    }

    const mintImage = () => {
        // This is a placeholder. In a real application, you would implement the minting logic here.
        console.log('Minting image:', imageUrl)
    }

    async function query(data) {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
            {
                headers: {
                    Authorization: "Bearer ",
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const result = await response.json();
        return result;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4 font-mono">
            <div className="w-full max-w-md space-y-4 border-4 border-white p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-white"></div>
                <div className="absolute bottom-0 left-0 w-full h-2 bg-white"></div>
                <div className="absolute top-0 left-0 w-2 h-full bg-white"></div>
                <div className="absolute top-0 right-0 w-2 h-full bg-white"></div>
                <h1 className="text-4xl font-bold text-center mb-8 pixel-text">HOW?</h1>
                {isGenerating ? (
                    <>
                        <img
                            src={"/images/blacksheep/fuck-loader.gif"}
                            alt="Generating ..."
                            className="w-full border-4 border-white"
                        />
                    </>
                ) : (
                    <></>
                )}
                <input
                    type="text"
                    placeholder="DEFINE YOUR BLACKSHEEPNESS"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    disabled={isGenerating || isGenerated}
                    className="bg-black border-4 border-white text-white placeholder-gray-500 px-4 py-2 w-full"
                />
                <button
                    onClick={handleGenerate}
                    disabled={!inputValue || isGenerating || isGenerated}
                    className="w-full bg-white text-black border-4 border-white hover:bg-gray-200 pixel-text"
                >
                    {isGenerating ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin inline-block" />
                            GENERATING...
                        </>
                    ) : (
                        'GENERATE'
                    )}
                </button>

                {isGenerated && (
                    <div className="space-y-4">
                        <img
                            src={selectedImage}
                            alt="Generated NFT"
                            className="w-full border-4 border-white"
                        />
                        <Button
                            onClick={handleMint}
                            disabled={isMinting || isSuccess}
                            className="w-full bg-white text-black border-4 border-white hover:bg-gray-200 pixel-text"
                        >
                            {isMinting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin inline-block" />
                                    MINTING...
                                </>
                            ) : (
                                'MINT NFT'
                            )}
                        </Button>
                    </div>
                )}
                {isSuccess && (
                    <div className="text-center text-green-400 pixel-text">
                        <p>SUCCESSFULLY MINTED!</p>
                        <a
                            href="https://www.icpexplorer.org/#/tx/84c531534ca9a8be531cf1702d180e10f4df1ebfc583ebca61e5930556fb7f4c"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                        >
                            VIEW TRANSACTION
                        </a>
                    </div>
                )}
            </div>
            <style jsx global>{`
                @font-face {
                    font-family: 'PixelFont';
                    src: url('https://fonts.gstatic.com/s/pressstart2p/v14/e3t4euO8T-267oIAQAu6jDQyK3nVivM.woff2') format('woff2');
                }
                .pixel-text {
                    font-family: 'PixelFont', monospace;
                    letter-spacing: 2px;
                }
            `}</style>
        </div>
    )
}
