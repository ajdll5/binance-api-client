import development from "./development";
import production from "./production";

let env: typeof production;
switch (process.env.NODE_ENV) {
	case "production":
		env = production;
		break;
	case "development":
		env = development;
		break;
	default:
		throw Error("Invalid NODE_ENV");
}

export default env;
