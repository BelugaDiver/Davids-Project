import Footer from "@/components/footer";
import GlobalBar from "@/components/globalBar";
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

export default function NotFound() {
   return (
      <main role="main" className="flex min-h-screen flex-col items-center justify-between">
         <GlobalBar />
         <div className="flex min-w-full flex-col items-center justify-between">
            <div className="flex w-full justify-center items-center">
               <p>Video Not Found. <SentimentDissatisfiedIcon /></p>
            </div>
         </div>
         <Footer />
      </main>
   )
}