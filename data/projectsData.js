const projectsData = [
  {
    title: 'Pose Estimation from Video file',
    description: `This demo allows you to upload a video (in .mp4 format) to run with the model. Once the video is processed, it automatically downloads the video with pose keypoints.`,
    imgSrc: '/static/images/sparrowhawk-avatar.jpg',
    href: '/apps/pose-estimation-from-video-file/index.html?model=movenet',
  },
  {
    title: 'Pose Estimation from Webcam',
    description: `This demo uses your camera to get live stream and tracks your poses in real-time. You can try out different models, runtimes and backends to see the difference. It works on laptops, iPhones and android phones.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/apps/pose-estimation-from-webcam/index.html?model=movenet',
  },
]

export default projectsData
