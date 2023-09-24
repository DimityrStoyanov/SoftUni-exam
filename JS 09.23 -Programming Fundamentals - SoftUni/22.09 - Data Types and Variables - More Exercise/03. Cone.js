function cone(radius, height) {
    let volume = (1/3)* Math.PI * radius * radius * height
    console.log(`volume = ${volume.toFixed(4)}`);
   
    // πr(r + √(r2 + h2))
    let area = Math.PI * radius *( radius + Math.sqrt(radius *radius + height *height ))
    console.log(`area = ${area.toFixed(4)}`);
}
cone(3,
    5)
cone(3.3,
    7.8)
cone(4, 9)