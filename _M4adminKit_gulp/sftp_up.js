var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();

var config = {
    user: "root",
    password: "m4oneMIP246!3@",
    host: "218.236.25.246",
    port: 50022,
    localRoot: __dirname + "/static",       // 업로드 경로
    remoteRoot: "/home/WEB_SOURCE/m4admin/", // 서버경로
    // include: ["*", "**/*"],               // 업로드 파일 형식
    include: ["*"],
    // 제외파일
    exclude: ["dev_inc/**", "**/*.map", "node_modules/**", "node_modules/**/.*", ".git/**", ".svn/**"],
    // true 인 경우 업로드하기 전에 대상에서 기존 파일을 모두 삭제합니다.
    deleteRemote: false,
    // Passive mode is forced (EPSV command is not sent)
    forcePasv: true,
    sftp: true
};
 
ftpDeploy
    .deploy(config)
    .then(res => console.log("finished:", res))
    .catch(err => console.log(err));