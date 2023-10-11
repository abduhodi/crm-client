import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faHeart, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(faHeart, faEye, faEyeSlash);
export default library;
