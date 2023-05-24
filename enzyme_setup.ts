// ./enzyme_setup.ts
import Adapter from "@cfaester/enzyme-adapter-react-18";
import Enzyme from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

export default Enzyme;