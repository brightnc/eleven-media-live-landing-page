const RecordLive = () => {
  return (
    <div className="bg-primary-color flex flex-col items-center text-white w-full md:h-[600px] lg:flex-row xl:h-[800px] lg:px-14 py-6">
      <div className="left w-full h-1/2 lg:h-3/5 flex justify-center ">
        <iframe
          src="https://www.youtube.com/embed/Uj4AWaR7gjU"
          className="w-4/5 lg:w-full h-full"
        />
      </div>
      <div className="right w-full h-1/2 mt-6">
        <h2 className="font-bold font-head text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl ">
          Record Live
        </h2>
        <p className="font-body text-xs text-white text-center md:text-3xl 2xl:text-4xl lg:text-left mt-4 px-9 lg:indent-14 ">
          การบันทึกการถ่ายทอดสด (Record Live)
          เป็นบริการที่ช่วยให้คุณเก็บทุกช่วงเวลาสำคัญ ในระหว่างการสตรีมมิ่ง
          เพื่อให้คุณสามารถนำวีดีโอที่บันทึกไว้ไปใช้ประโยชน์ในภายหลังได้ตามต้องการ
          ไม่ว่าจะเป็นการเผยแพร่ซ้ำ การแบ่งปันบนโซเชียลมีเดีย
          หรือการวิเคราะห์และการปรับปรุงการสตรีมมิ่ง ครั้งถัดไป
        </p>
      </div>
    </div>
  );
};

export default RecordLive;
