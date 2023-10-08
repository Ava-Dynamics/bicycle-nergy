import { Injectable } from '@nestjs/common';
import { File, User, bike } from '@prisma/client';
import { PrismaService } from 'src/v1/database/prisma/prisma.service';

@Injectable()
export class BikesService {
    constructor(private readonly db:PrismaService) {}

    async getBikes():Promise<bike[]> {
        return await this.db.bike.findMany({where: {user:null}});
    }

    async getBike(id: number) {
        if(id){return await this.db.bike.findFirst({where: {id:id}})}
    }

    async getBikeImage(id):Promise<File>{
        return await this.db.file.findFirst({where: {id:id}});
    }

    async getBikeRide(user:User) {
        let mybike = await this.db.bike.findFirst({where:{user:user.id}});
        if(mybike){return [mybike]}
        return await this.db.bike.findMany({where: {user:null}});
    }

    async updateBikeRide(user:User,id){
        await this.deleteBikeRide(user,id);
        await this.db.bike.update({
            data: {user:user.id},
            where: {
                id: Number(id)
            }
        })
    }

    async deleteBikeRide(user:User,id){
        await this.db.bike.update({
            data: {user:null},
            where: {
                id: Number(id)
            }
        })
    }


    async setBikeImage(file:any,json,user:User){
        json.bike = Number(json.bike);
        file['userid'] = user.id;
        file['buffer'] = file['buffer'].toString("base64");
        if(json.bike){
            let bike = await this.db.bike.findFirst({where:{id:json.bike}});
            if(bike.image){
                await this.db.file.update({
                    data: file,
                    where: {
                        id: bike.image
                    }
                });
            } else {
                let filec = await this.db.file.create({
                    data: file
                });
                await this.db.bike.update({
                    where: { id: json.bike },
                    data: {image:filec.id}
                });
            }
        }
    }

    async insertTest(){
        // let bikes = [
        //   {x:-22.8232, y:-47.2782,t:'Bicicleta Aro 29 Caloi Velox MY23'},
        //   {x:-22.8284, y:-47.2698,t:'BICICLETA GTS ARO 29'},
        //   {x:-22.8340, y:-47.2660,t:'Bicicleta Aro 26 Foxer'},
        //   {x:-22.8383, y:-47.2681,t:'Bicicleta Aro 26 Colli GPS 21 Marchas'}, 
        //   {x:-22.8197, y:-47.2626,t:'BICICLETA 29 GTS M1'}, 
        //   {x:-22.8150, y:-47.2598,t:'BICICLETA 26 GTS M1 FAT BIKE'}, 
        //   {x:-22.8125, y:-47.2761,t:'Bicicleta AXW Aço Carbono Aro 29'},  
        // ];
        // bikes.forEach(async bike =>{
        //   await this.db.bike.create({
        //     data: {
        //       coordinate: JSON.stringify({x:bike.x, y: bike.y}),
        //       name: bike.t
        //     }
        //   });
        // });
    }
}
