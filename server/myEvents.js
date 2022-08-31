import Logger from "./logger";
   
    export async function DataBaseErr() {
        Logger.log('error', "can't get data from DB");
    }
    export async function ImgaeFormErr() {
        Logger.log('error', "empty values in upload image form");
    }
    export async function ImgaeFormSuc() {
        Logger.log('info', "image is uploaded!");
    }
    export async function InsertSuc() {
        Logger.log('info', "Insert success!");
    }
    export async function GetSuc() {
        Logger.log('info', "Get success!");
    }
    export async function PutSuc() {
        Logger.log('info', "Put success!");
    }
    export async function FileName() {
        Logger.log('error', "filename error!");
    }
    export async function InsertFormBounding() {
        Logger.log('error', "insertBoundingBox form error!");
    }
    export async function UpdateFormSwitchboard() {
        Logger.log('error', "UpdateFormSwitchboard form error!");
    }
    export async function InserFormSwitchboard() {
        Logger.log('error', "InserFormSwitchboard form error!");
    }
