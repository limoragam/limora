export class VisualNest {
    public beakColor = {attr:{}, d:""};     // {attr:{color, fill-rule, etc.}, d:[strings of paths]}
    public wingsColor = {attr:{}, d:""};    // {attr:{color, fill-rule, etc.}, d:[strings of paths]}
    public body = [];                       // [strings of paths]
    public eyes = {
        leftEye:[],
        leftPupil:[],
        rightEye:[],
        rightPupil:[]
    };   // {leftEye:[strings of paths], leftPupil:[strings of paths], rightEye:[strings of paths], rightPupil:[strings of paths]}

    constructor(
        beakColor:{attr:{},d:string},
        wingsColor:{attr:{},d:string},
        body:string[],
        eyes:{leftEye:string[],leftPupil:string[],rightEye:string[],rightPupil:string[]}
    ) {
        this.beakColor = beakColor;
        this.wingsColor = wingsColor;
        this.body = body;
        this.eyes = eyes;
    }
}