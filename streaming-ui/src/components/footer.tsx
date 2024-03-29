import CopyrightIcon from '@mui/icons-material/Copyright';

export default function Footer() {
   return (
      <footer role="footer" className="flex items-center justify-center py-20 md:p-20 w-full footer border-t md:px-36 text-sm">
         <div className="md:w-2/3 max-w-screen-lg lg:px-2 text-center md:text-left">
            <p>Do not sell or share my info.</p>
            <br />
            <p className="opacity-60 flex items-center"><CopyrightIcon />&nbsp;Copyright, 2023 - David Asubiojo</p>
         </div>
      </footer>
   )
}