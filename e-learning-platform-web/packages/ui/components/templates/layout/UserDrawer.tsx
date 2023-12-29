import React from "react";

interface UserDrawerProps {
  name: string;
  profile: string;
  altprofile?: string;
  email: string;
  hrefpersonalaccount?: string;
  hrefcv?: string;
  hrefpinformation?: string;
  hrefasecurity?: string;
}

export function Userdrawer({
  name,
  profile,
  altprofile,
  email,
  hrefpersonalaccount,
  hrefcv,
  hrefpinformation,
  hrefasecurity,
}: UserDrawerProps) {
  const [background, setbackground] = React.useState<
    "personaccount" | "resume" | "personprofile" | "accountsecurity"
  >("personaccount");
  var personAccount, reSume, personProfile, AccountSecurity;
  if (hrefpersonalaccount != null) {
    personAccount = hrefpersonalaccount?.slice(2, 15).toLocaleLowerCase();
  } else if (hrefasecurity != null) {
    AccountSecurity = hrefasecurity.slice(2, 17).toLocaleLowerCase();
  } else if (hrefcv != null) {
    reSume = hrefcv.slice(2, 8).toLocaleLowerCase();
  } else if (hrefpinformation != null) {
    personProfile = hrefpinformation.slice(2, 15).toLocaleLowerCase();
  }
  console.log(personAccount);
  console.log(reSume);
  console.log(personProfile);
  console.log(AccountSecurity);
  return (
    <div style={{ width: "300px", height: "460px" }}>
      <div
        style={{
          width: "100%",
          float: "left",
          height: "25%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "80%",
            borderBottom: "1px solid #118AEF",
            display: "flex",
            alignItems: "center",
            height: "90%",
            marginLeft: "25px",
          }}
        >
          <img
            style={{ width: "60px", height: "60px" }}
            src={profile}
            alt={altprofile}
          />
          <div style={{ marginLeft: "25px" }}>
            <h2 className="font-bold">{name}</h2>
            <p>{email}</p>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          float: "left",
          height: "75%",
          marginTop: "25px",
        }}
      >
        <div
          className={`rounded-md font-bold hover:bg-[#118AEF] hover:text-white ${personAccount === "personaccount" ? "bg-[#118AEF] text-white " : ""
            }`}
          style={{
            marginBottom: "25px",
            width: "100%",
            height: "40px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <a
            href={
              hrefpersonalaccount != null
                ? hrefpersonalaccount
                : "personAccount"
            }
          >
            <button
              className="flex rounded-md"
              style={{ marginLeft: "65px" }}
              onClick={() => setbackground("personaccount")}
            >
              <img
                style={{ width: "25px", height: "25px", marginRight: "15px" }}
                src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
                alt=""
              />
              Personal Account
            </button>
          </a>
        </div>
        <div
          className={`rounded-md font-bold hover:bg-[#118AEF] hover:text-white ${reSume === "resume" ? "bg-[#118AEF] text-white" : ""
            }`}
          style={{
            marginBottom: "25px",
            width: "100%",
            height: "40px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <a href={hrefcv != null ? hrefcv : "resume"}>
            <button
              className="flex rounded-md"
              style={{ marginLeft: "65px" }}
              onClick={() => setbackground("resume")}
            >
              {" "}
              <img
                style={{ width: "25px", height: "25px", marginRight: "15px" }}
                src="https://cdn-icons-png.flaticon.com/512/3135/3135686.png"
                alt=""
              />
              CV/Resume
            </button>
          </a>
        </div>
        <div
          className={`rounded-md font-bold hover:bg-[#118AEF] hover:text-white ${personProfile === "personprofile" ? "bg-[#118AEF] text-white" : ""
            }`}
          style={{
            marginBottom: "25px",
            width: "100%",
            height: "40px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <a
            href={hrefpinformation != null ? hrefpinformation : "personProfile"}
          >
            <button
              onClick={() => setbackground("personprofile")}
              className="flex rounded-md"
              style={{ marginLeft: "65px" }}
            >
              <img
                style={{ width: "25px", height: "25px", marginRight: "15px" }}
                src="https://cdn-icons-png.flaticon.com/512/1250/1250746.png"
                alt=""
              />
              Personal Information
            </button>
          </a>
        </div>
        <div
          className={`rounded-md font-bold hover:bg-[#118AEF] hover:text-white ${AccountSecurity === "accountsecurity"
              ? "bg-[#118AEF] text-white"
              : ""
            }`}
          style={{
            marginBottom: "25px",
            width: "100%",
            height: "40px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <a href={hrefasecurity != null ? hrefasecurity : "accountSecurity"}>
            <button
              onClick={() => setbackground("accountsecurity")}
              className="flex rounded-md"
              style={{ marginLeft: "65px" }}
            >
              <img
                style={{ width: "25px", height: "25px", marginRight: "15px" }}
                src="https://cdn-icons-png.flaticon.com/512/3257/3257787.png"
                alt=""
              />
              Account Security
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
