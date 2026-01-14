const Header = () => {
    return (
        <>
            <div className='flex justify-between items-center px-10 mt-4'>
                <h1 className='text-text text-2xl font-bold'>Own Byte</h1>
                <div className='flex gap-8'>
                    <p className="text-sm text-text"><a className="" target="_blank" href="https://github.com/own-byte">Github</a></p>

                    <p className="text-sm text-text"><a className="" target="_blank" href="https://hub.docker.com/u/viniciuscassemira">Dockerhub</a></p>
                    <p className="text-sm text-text"><a className="" target="_blank" href="https://github.com/own-byte/.github/tree/main/docs">Docs</a></p>
                </div>
            </div>
        </>
    )
}

export default Header