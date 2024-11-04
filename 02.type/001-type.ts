type foo<T extends string> = T
let myCustomString: foo<"custom"> = "custom";
