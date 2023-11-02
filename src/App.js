import { useState } from "react";
import "./App.css";
import profileLogo from "./assets/user.png";

function App() {
  const nilai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const mahasiswa_Arr = [
    "mahasiswa_1",
    "mahasiswa_2",
    "mahasiswa_3",
    "mahasiswa_4",
    "mahasiswa_5",
    "mahasiswa_6",
    "mahasiswa_7",
    "mahasiswa_8",
    "mahasiswa_9",
    "mahasiswa_10",
  ];
  const [state, setState] = useState(null);
  const [screen, setScreen] = useState("app");

  return (
    <div className="container">
      <h2 className="title">Aplikasi Penilaian Mahasiswa</h2>
      <div>
        {screen === "app" ? (
          <>
            <div className="row table-header">
              <div className="col-2"></div>
              <div className="col-2">Aspek Penilaian 1</div>
              <div className="col-2">Aspek Penilaian 2</div>
              <div className="col-2">Aspek Penilaian 3</div>
              <div className="col-2">Aspek Penilaian 4</div>
            </div>
            {mahasiswa_Arr.map((mahasiswaArr, index) => {
              return (
                <div className="container-table" key={index}>
                  <div className="row">
                    <div className="col-2 d-flex items-center">
                      <img className="profile-logo" src={profileLogo} alt="" />
                      <span className="name-header">Mahasiswa {index + 1}</span>
                    </div>
                    <div className="col-2">
                      <select
                        value={state?.aspek_penilaian_1?.[mahasiswaArr]}
                        onChange={(e) => {
                          setState({
                            ...state,
                            aspek_penilaian_1: {
                              ...state?.aspek_penilaian_1,
                              [mahasiswaArr]: e.target.value,
                            },
                          });
                        }}
                        className="dropdwon"
                      >
                        <option selected disabled>
                          Pilih Salah Satu
                        </option>
                        {nilai.map((val, indexNilai) => {
                          return (
                            <option key={indexNilai} value={val}>
                              {val}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="col-2">
                      <select
                        onChange={(e) => {
                          setState({
                            ...state,
                            aspek_penilaian_2: {
                              ...state?.aspek_penilaian_2,
                              [mahasiswaArr]: e.target.value,
                            },
                          });
                        }}
                        className="dropdwon"
                      >
                        <option selected disabled>
                          Pilih Salah Satu
                        </option>
                        {nilai.map((val, indexNilai) => {
                          return (
                            <option key={indexNilai} value={val}>
                              {val}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="col-2">
                      <select
                        onChange={(e) => {
                          setState({
                            ...state,
                            aspek_penilaian_3: {
                              ...state?.aspek_penilaian_3,
                              [mahasiswaArr]: e.target.value,
                            },
                          });
                        }}
                        className="dropdwon"
                      >
                        <option selected disabled>
                          Pilih Salah Satu
                        </option>
                        {nilai.map((val, indexNilai) => {
                          return (
                            <option key={indexNilai} value={val}>
                              {val}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="col-2">
                      <select
                        onChange={(e) => {
                          setState({
                            ...state,
                            aspek_penilaian_4: {
                              ...state?.aspek_penilaian_4,
                              [mahasiswaArr]: e.target.value,
                            },
                          });
                        }}
                        className="dropdwon"
                      >
                        <option selected disabled>
                          Pilih Salah Satu
                        </option>
                        {nilai.map((val, indexNilai) => {
                          return (
                            <option key={indexNilai} value={val}>
                              {val}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="row">
              <div className="col-6">
                <button
                  className="button"
                  onClick={() => {
                    setScreen("json");
                  }}
                >
                  Simpan
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="container-json-view">
            <div className="row justify-content-center">
              <div className="col-6 json-container">
                {<pre>{state ? JSON.stringify(state, null, 2)?.replace(/"/g, "") : "Data tidak ditemukan"}</pre>}
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-6 button-json-container">
                <button
                  className="button"
                  onClick={() => {
                    setScreen("app");
                  }}
                >
                  kembali
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
