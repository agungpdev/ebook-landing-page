import Logo from "./Logo";

export default function Brand(){
    return(
        <div className="flex items-center">
              <div className="mr-4">
                <Logo/>
              </div>
              <h1 className="text-lg text-white">The Malaka</h1>
            </div>
    )
}