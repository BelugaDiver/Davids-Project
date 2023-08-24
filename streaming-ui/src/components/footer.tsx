import CopyrightIcon from '@mui/icons-material/Copyright';

export default function Footer() {
   return (
      <footer role="footer" className="flex items-center justify-center p-20 w-full footer border-t px-36 text-sm">
         <div className="w-2/3">
            <p>Do not sell or share my info.</p>
            <br />
            <p className="opacity-60 flex items-center"><CopyrightIcon />&nbsp;Copyright, 2023 - David Asubiojo</p>
         </div>
      </footer>
   )
}