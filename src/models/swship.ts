export class SWShip
{
    name: string;
    model: string;
    manufacturer: string;
    cost: string;
    crew: string;
    url: string;

    // get id():number {
    //     let parts:string[] = this.url.split('/');
    //     console.log('hello log');
    //     parts.pop();
    //     return +parts.pop();
    // }

    getId() : number
    {
        console.log('hello console');
        let urlPart:string = this.url.split('/').pop();
        return +urlPart;
    }
}