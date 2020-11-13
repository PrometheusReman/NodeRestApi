 exports.getDistanceFromLatLonInKm = function (pLat,pLon,dLat,dLon)
{
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(dLat-pLat);  // deg2rad below
    var dLon = deg2rad(dLon-pLon); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(pLat)) * Math.cos(deg2rad(dLat)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  }
 
function deg2rad(deg)
{
    return deg * (Math.PI/180)
}

//module.exports = getDistanceFromLatLonInKm;