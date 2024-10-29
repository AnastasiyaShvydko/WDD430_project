import Link from "next/link"
import { EnvelopeIcon , InboxStackIcon, SpeakerWaveIcon} from '@heroicons/react/24/outline';

export default function Footer(){

    return(
        <footer className="min-h-40 bg-indigo-500">
          <div className="grid grid-cols-2">
            <div className="flex flex-col p-14 ">
              <p>&copy; 2024 Group 6</p>
              <ul className="my-5">
                <li>Anastasiia Shvydko</li>
                <li>Denis Poussard</li>
                <li>Nomore Tawanda Zhanje</li>
    
              </ul>
            </div>
          {/* <div className="">
            <div className="">
              <div className="">
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="col l4 offset-l2 s12"> */}

                    <div className="flex flex-row  items-center justify-center p-8">
                        <Link href="#"> <InboxStackIcon className="w-6" /></Link>
                        <Link href="#"><SpeakerWaveIcon className="w-6" /></Link>
                        <Link href="#"><EnvelopeIcon className="w-6" /></Link>
                    </div>
                {/* <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2014 Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div> */}
          {/* </div> */}
          </div>
        </footer>
    )
}
